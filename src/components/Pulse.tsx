import { useState, useEffect } from 'react';
import { fetchData } from '../services';
import { Card, Link, Progress } from '@pega/cosmos-react-core';
import { Feed, FeedNewPost, FeedPost, FeedReply } from '@pega/cosmos-react-social';
import { getRelativeTime } from '../utils/datetime';
import { getOperatorName, getOperatorUrl } from '../utils/env';
import { getDataUrl } from '../services';

export default function Pulse() {
  const [posts, setpost] = useState([]);
  const [isLoaded, setPulseIsLoaded] = useState(false);

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

  const renderContent = (context: any) => {
    if (context.pxContextType === 'case') {
      return (
        <Link href={`/case/${context.pyContext.split(' ')[1]}`} previewable target='_blank'>
          {context.pyContextDescription}
        </Link>
      );
    }
    return context.pyContextDescription;
  };

  const renderReplies = (item: any) => {
    if (item.pxResults && item.pxResults.length > 0) {
      return item.pxResults.map((reply: any) => (
        <FeedReply
          id={reply.pzInsKey}
          key={reply.pzInsKey}
          content={reply.pyMessage}
          info={{
            fullname: reply.postedByUser.name,
            fullnameLabel: reply.postedByUser.name,
            username: reply.postedByUser.ID,
            avatarSrc: getDataUrl('operatorimage', reply.postedByUser.userImage),
            content: reply.pyMessage,
            timeElapsed: getRelativeTime(new Date(reply.pxCreateDateTime))
          }}
          interactionInfo={{
            likeLabel: 'Like',
            likeCount: reply.pyLikes.pxLikeCount,
            commentLabel: 'Comment'
          }}
          onLikeClick={() => {}}
          onCommentClick={() => {}}
        />
      ));
    }
    return null;
  };

  return (
    <Feed
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
          onPost={() => {}}
        />
      }
      posts={posts.map((item: any) => (
        <FeedPost
          id={item.pzInsKey}
          key={item.pzInsKey}
          info={{
            fullname: item.postedByUser.name,
            username: item.postedByUser.ID,
            avatarSrc: getDataUrl('operatorimage', item.postedByUser.userImage),
            content: item.pyMessage,
            postContext: renderContent(item),
            timeElapsed: getRelativeTime(new Date(item.pyFeed.pyPostedOn))
          }}
          interactionInfo={{
            likeLabel: 'Like',
            likeCount: item.pyLikes.pxLikeCount,
            commentLabel: 'Comment'
          }}
          replies={renderReplies(item)}
          attachments={[]}
          maxContentHeight={80}
          onLikeClick={() => {}}
          onUserClick={() => {}}
          actions={[{ text: 'Bookmark', id: 'Bookmark', onClick: () => {} }]}
          replyInput={{
            commentLabel: 'Send Comment',
            attachments: [],
            onFilesAdded: () => {},
            onSubmit: () => {},
            placeholder: 'Add a comment'
          }}
        />
      ))}
    />
  );
}
