import React from 'react';
import SingleComment from './SingleComment';
import Button from '@mui/material/Button';
import './App.css';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: [
                // {
                //     uuid: 1,
                //     writer: "김코딩",
                //     date: "2023-02-08",
                //     content: "안녕 리액트"
                // },
                // {
                //     uuid: 2,
                //     writer: "김코딩",
                //     date: "2023-02-07",
                //     content: "안녕 리액트 22"
                // }
            ]
        }
        this.addComment = this.addComment.bind(this);
    }

    addComment(){
        let value = document.querySelector('#new-comment-content').value;
        this.setState({comments: [...this.state.comments,{
            uuid: this.state.comments.length + 1,
            writer: '김코딩',
            date: new Date().toISOString().slice(0,10),
            content: value
        }]})
    }

    render(){
        return(
            <div id="root" >
                <div display="flex" style={{width: 810}}>
                    <div style={{padding:5}}>작성자: OOO</div>
                    <div id="writing-area" style={{width: 800, padding:3}}>
                        <textarea id="new-comment-content"></textarea>
                        <button style={{}}variant="text" id="submit-new-comment" onClick={this.addComment}>작성완료</button>
                    </div>
                    <ul id="comments">
                        {
                            this.state.comments.map(comment =>{
                                return <SingleComment key={comment.uuid} comment={comment}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Comments;