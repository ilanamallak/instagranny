import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons'

import './post.css'

const Header = ({name, profilePic}) => <div className="post-header">
    <img src={profilePic} />
    <span>{name}</span>
</div>

const Image = ({pic}) => <div className="post-image">
    <img src={pic} />
</div>

const Like = () => {
    const [liked, setLiked] = useState(false)

    return <div className="post-like" onClick={() => setLiked(current => !current)}>
        <Ionicons
            name="md-heart"
            size={30}
            style={{ marginRight: 17, width: 30 }}
            color={liked ? '#E53045' : '#ccc'}
        />
        <span style={{color: liked ? '#E53045' : '#010101'}}>
            Amei essa foto!
        </span>
    </div>
}

const Comments = () => <div className="post-comments">
    <img src={require('../assets/images/comment-pp.jpeg')}/>
    <input type="text" placeholder="Adicionar um comentário"/>
</div>

const Post = ({name, profilePic, pic}) => <div className="post-container">
    <Header name={name} profilePic={profilePic} />
    <Image pic={pic} />
    <Like />
    <Comments />
</div>

export default Post