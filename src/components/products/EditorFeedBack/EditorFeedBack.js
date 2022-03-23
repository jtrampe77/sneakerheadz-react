import React from 'react';
import {AiOutlineCloudUpload, AiOutlineCheckCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOption} from './styles'
import {Button} from 'ui/buttons'

function EditorFeedBack ({children, status, writeCompleted, ...props})  {

  const navigator = useNavigate();

  return (
        <EditorFeedBackStyles  {...props}>
          {
            !status
            ?
           <FeedBack>
             <AiOutlineCheckCircle color='green' size="12rem" />
             <FeedBackMessage>
               Sneaker Uploaded Successfully!
             </FeedBackMessage>
           </FeedBack>
           :
           <FeedBack>
             <AiOutlineCloudUpload color='green' size="12rem" />
             <FeedBackMessage>
               Sneaker Uploading...
             </FeedBackMessage>
           </FeedBack>
          }

          <FeedBackOption>
            <Button 
            bgcolor="red" 
            color='white' 
            onClick={()=> writeCompleted(false)} 
            disabled={status}>
              Add Another Sneaker
            </Button>

            <Button 
            bgcolor="black" 
            color='white'
            onClick={()=> navigator('/dashboard')}
            >
              View All Sneakerz
            </Button>
          </FeedBackOption>
        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack