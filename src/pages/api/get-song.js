
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { SupabaseHybridSearch } from "langchain/retrievers/supabase";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { createClient } from "@supabase/supabase-js";
import { getSpotifySongLink } from "../../utils/spotify";
// First, follow set-up instructions at
// https://js.langchain.com/docs/modules/indexes/vector_stores/integrations/supabase

export default async function handler(req, res) {
  
    try {
    const {query} = req.query;
    const privateKey = process.env.SUPABASE_KEY;
    if (!privateKey) throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url) throw new Error(`Expected env var SUPABASE_URL`);

    const client = createClient(url, privateKey);
    const embeddings = new OpenAIEmbeddings();

    // const vectorStore = await SupabaseVectorStore.fromExistingIndex(embeddings,{
    //     client,
    //     tableName: "documents",
    //     queryName: "match_documents",
    //   });

    // const resultOne = await vectorStore.similaritySearch(query, 1);

    const retriever = new SupabaseHybridSearch(embeddings, {
      client,
      //  Below are the defaults, expecting that you set up your supabase table and functions according to the guide above. Please change if necessary.
      similarityK: 2,
      keywordK: 2,
      tableName: "documents",
      similarityQueryName: "match_documents",
      keywordQueryName: "kw_match_documents",
    });
    
    const resultOne = await retriever.getRelevantDocuments(query);
    // const resultOne = await retriever.similaritySearch(query, 3);
    // const resultOne = await retriever.keywordSearch(query, 10);


    console.log(resultOne)
    // const songLink = "test"
    // get song link
    const songName = resultOne[0].metadata.title
    const songLink = await getSpotifySongLink(songName);
    // console.log(songLink)

    const song = {
        name: songName,
        link: songLink,
        pageContent: resultOne[0].pageContent
    }

    res.status(200).json(song);
  } catch (error) {
    console.error(error);
    
  }
};