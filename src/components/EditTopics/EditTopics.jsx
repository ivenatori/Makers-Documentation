import React, { useContext, useEffect, useState } from 'react';
import { documentationContext } from '../../context/DocumentationContext';
import './EditTopics.css';


const EditTopics = (props) => {
    const { getTopicDetails, topicDetails } = useContext(documentationContext);
    const [editTopic, setEditTopic] = useState({})
    function handleValues(e,index){
        let newSubTopic= editTopic.subTopics[index];
        newSubtopic[e.target.name]=e.target.value;
        let newTopic={...editTopic};
        newTopic.subTopics.splice(index,1,newSubTopic);
        console.log(newTopic);
        setEditTopic(newTopic)
    }
    useEffect(() => {
        getTopicDetails(props.match.params.id);
    }, []);
    
    useEffect(() => {
        setEditTopic(topicDetails);
    }, [topicDetails])

    return (
        <div>
            {editTopic.topicTitle ? (
                    editTopic.subTopics.map(item, index => (
                        <div key={`${editTopic.id}-${item.subTopicTitle}`}>
                            <textarea
                                name="subTopicTitle"
                                type="text"
                                placeholder="Заголовок"
                                onChange={(e)=>handleValues(e,index)}
                            >
                                {item.subTopicTitle}
                            </textarea>
                            <textarea
                                name="firstDescription"
                                type="text"
                                placeholder="Описание"
                                onChange={(e)=>handleValues(e,index)}
                            >
                                {item.firstDescription}
                            </textarea>
                            <textarea
                                name="img"
                                type="text"
                                placeholder="Изображение" 
                                onChange={(e)=>handleValues(e,index)}                               
                            >
                                {item.img}
                            </textarea>
                            <textarea
                                name="secondDescription"
                                type="text"
                                placeholder="Описание"
                                onChange={(e)=>handleValues(e,index)}
                            >
                                {item.secondDescription}
                            </textarea>
                            <Link to={`/details/${editTopic.id}`}>
                            <button onClick={()=>editTopicDetails(editTopic)}>Сохранить</button>
                            </Link>
                        </div>
                    ))
            ) : (<div>Loading</div>)}

        </div>
    );
};

export default EditTopics;