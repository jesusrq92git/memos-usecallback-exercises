import React, { memo } from "react";

const Item = memo(props => {

  const { user, handleDelete } = props;
  
  return (
    <li>
      { user.name }
      <button onClick={()=>handleDelete(user.id)}>
        Delete
      </button>
    </li>
  );
})

export default Item;
