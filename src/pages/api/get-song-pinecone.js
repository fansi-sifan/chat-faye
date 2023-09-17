import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { getSpotifySongLink } from "../../utils/spotify";
import { Pinecone } from '@pinecone-database/pinecone';



export default async function handler(req, res) {
    try {
    const {query} = req.query;
    const SingerName = req.query.artistName.replace(/\s/g, '');
    console.log(req.query)
    const pinecone = new Pinecone({ 
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENV
    })

    const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX);

    /* Search the vector DB independently with meta filters */
    // const resultOne = await vectorStore.similaritySearch(query, 1);
    const embeddings_model = new OpenAIEmbeddings();
    const embeded_query = await embeddings_model.embedQuery(query);
    const resultOne = await pineconeIndex.query({
      topK: 3,
      vector: embeded_query,
      includeMetadata: true,
      // filter: { genre: { $in: ["comedy", "documentary", "drama"] } },
      filter: { singer: { $eq: SingerName } }
  });

    console.log(resultOne['matches'][0].metadata)
    // const songLink = "test"
    // get song link
    // const songName = resultOne[0].metadata.title
    const songName = resultOne['matches'][0].metadata.title
    const songLink = await getSpotifySongLink(songName, req.query.artistName);
    // console.log(songLink)

    const song = {
        name: songName,
        link: songLink,
        pageContent: resultOne['matches'][0].metadata.context
    }

    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    
  }
};