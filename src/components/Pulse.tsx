import { useState, useEffect } from 'react';
import { fetchData } from '../services';
import { Feed, FeedNewPost, FeedPost, FeedReply } from '@pega/cosmos-react-social';
import { getOperatorName, getOperatorUrl } from '../utils/env';
import { getDataUrl } from '../services';

export default function Pulse() {
  const [posts, setpost] = useState([]);
  const [, setPulseIsLoaded] = useState(false);

  useEffect(() => {
    fetchData(
      'feed',
      'filterFor=DATA-PORTAL%20$DemoReact&feedClass=@baseclass&filterBy=&pageSize=9&olderThan='
    )
      .then(response => {
        if (response.data !== null && response.data.FeedList && response.data.FeedList.pxResults) {
          setpost(response.data.FeedList.pxResults);
        }
        setPulseIsLoaded(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderReplies = (item: any) => {
    if (item.pxResults && item.pxResults.length > 0) {
      return item.pxResults.map((reply: any) => (
        <FeedReply
          id={reply.pzInsKey}
          key={reply.pzInsKey}
          content={reply.pyMessage}
          fullname={reply.postedByUser.name}
          username={reply.postedByUser.ID}
          postTimestamp={new Date(reply.pxCreateDateTime)}
          liked={false}
          likes={[]}
          likeCount={reply.pyLikes.pxLikeCount}
          onLikeClick={() => {}}
          onCommentClick={() => {}}
        />
      ));
    }
    return [];
  };

  return (
    <Feed
      title='Feed'
      searchTypes={['user', 'case']}
      userInfo={{
        username: getOperatorName(),
        fullname: getOperatorName(),
        avatarSrc: getDataUrl('operatorimage', getOperatorUrl())
      }}
      newPostRegion={
        <FeedNewPost
          id='newpost'
          interactionInfo={{
            textAreaPlaceholder: 'Start a conversation',
            postLabel: 'Post'
          }}
          onFilesAdded={() => {}}
          onSubmit={() => {}}
        />
      }
      posts={posts.map((item: any) => (
        <FeedPost
          id={item.pzInsKey}
          key={item.pzInsKey}
          content={item.pyMessage}
          fullname={item.postedByUser.name}
          username={item.postedByUser.ID}
          postTimestamp={new Date(item.pyFeed.pyPostedOn)}
          replies={renderReplies(item)}
          attachments={[]}
          maxContentHeight={80}
          onCommentClick={() => {}}
          liked={false}
          likes={[]}
          likeCount={item.pyLikes.pxLikeCount}
          onLikeClick={() => {}}
          onUserClick={() => {}}
          actions={[{ text: 'Bookmark', id: 'Bookmark', onClick: () => {} }]}
          replyInput={{
            attachments: [],
            onFilesAdded: () => {},
            onSubmit: () => {}
          }}
        />
      ))}
    />
  );
}
