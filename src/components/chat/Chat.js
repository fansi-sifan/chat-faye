import { useEffect, useState } from "react";
import TextMessageForm from "./TextMessageForm";
import Response from "./Response";
import usePOST from "../hooks/usePOST";
import styles from "./chat.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { resetChat, addChat} from '../../store/chatReducer'


function Chat({selectedSinger}) {
    const { sendRequest: getAnswer, loading: loadingAnswer, error: errorLoading } = usePOST("/api/get-song-pinecone");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const messages = useSelector((state) => state.chat.messages);
    // const sessionId = useSelector((state) => state.chat.sessionid);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(resetChat(selectedSinger));
    }, [selectedSinger, dispatch]);

    const sendMessage = async (message) => {

      //display user send message
      dispatch(addChat({
        message: message,
        sender: "user",
        type: "text",
        vectors: null,
        nvectors: null,
        timestamp: Date.now(),
        hint: false,
      }));
      
      const params = new URLSearchParams({ query: message, artistName: selectedSinger });
      console.log(params.toString())
      const response = await fetch('/api/get-song-pinecone?' + params.toString());
      const data = await response.json();

      if(data) {
        //display reply
        dispatch(addChat({
          message: data.pageContent,
          type: "text",
          sender: "artist",
          vectors: data.vectors ? data.vectors : null,
          nvectors: data.nvectors ? data.nvectors : null,
          timestamp: Date.now(),
          hint: false,
        }));

        dispatch(addChat({
          message: data.name,
          type: "podcast",
          link: data.link,
          sender: "artist",
          vectors: data.vectors ? data.vectors : null,
          nvectors: data.nvectors ? data.nvectors : null,
          timestamp: Date.now(),
          hint: false,
        }));
      }


    };

    return (
      <div className={styles.chat}>
        <Response
          loading={loading}
          messages={messages}
        />
        <TextMessageForm
          sendMessage={sendMessage}
          error={error}
        />
      </div>
    );
  }
  
export default Chat;





  