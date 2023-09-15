
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { createClient } from "@supabase/supabase-js";
import { getSpotifySongLink } from "../../utils/spotify";
// First, follow set-up instructions at
// https://js.langchain.com/docs/modules/indexes/vector_stores/integrations/supabase

export default async function handler(req, res) {
    const artistName = "dpr_ian";
  
    try {
    const {query} = req.query;
    const privateKey = process.env.SUPABASE_KEY;
    if (!privateKey) throw new Error(`Expected env var SUPABASE_PRIVATE_KEY`);

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url) throw new Error(`Expected env var SUPABASE_URL`);

    const client = createClient(url, privateKey);

    const vectorStore = await SupabaseVectorStore.fromExistingIndex(
      new OpenAIEmbeddings(),
      {
        client,
        tableName: artistName,
        queryName: "search_coldplay",
      }
    );

    const resultOne = await vectorStore.similaritySearch(query, 1);

    console.log(resultOne[0].pageContent)
    // const songLink = "test"
    // get song link
    const songName = resultOne[0].metadata.title
    const songLink = await getSpotifySongLink(songName, artistName);
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