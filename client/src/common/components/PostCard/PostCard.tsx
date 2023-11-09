import { PostCardProps } from "../../types/interfaces";
import "./PostCard.css";

//Icons
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
//eslint-disable-next-line
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { RiMessageLine } from "react-icons/ri";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div key={post.id} className="post-card">
      <div className="post-header">
        <div className="post-upvote">
          <div className="upvote-arrow">
            <BiUpArrow />
          </div>
          <h1>{post.votes}</h1>
          <div className="downvote-arrow">
            <BiDownArrow />
          </div>
        </div>
        <div className="flex justify-between flex-grow">
          <h1>{post.community}</h1>
          <h2>~{post.author}</h2>
        </div>
      </div>
      <div className="post-body">
        <h1>{post.caption}</h1>
        <div className="post-img">
          <img src={post.image} alt={post.caption} />
        </div>
      </div>
      <div className="post-footer">
        <div className="comment-icon">
          <RiMessageLine />
          <p>1.1k comments</p>
        </div>
        <div className="share-icon">
          <AiOutlineShareAlt />
          <p>Share</p>
        </div>
        <div className="save-icon">
          <MdBookmarkBorder />
          <p>Save</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
