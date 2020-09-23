import React, { memo, useEffect } from "react";

const Item = memo(props => {

  useEffect(() => {
    //console.log("Item render " + props.user.name)
  });

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
