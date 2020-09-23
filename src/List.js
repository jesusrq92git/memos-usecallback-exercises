import React, { memo, useEffect } from "react";
import Item from './Item';

const List = memo(props => {

  useEffect(() => {
    //console.log("List render")
  });

  const { users, handleDelete } = props;
  
  return (
    <ul>
      {
        users.map(user =>(
          <Item 
            key={user.id} 
            user={user}
            handleDelete={handleDelete}
          />
        ))
      }
    </ul>
  );
})

export default List;
