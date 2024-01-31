import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { DragSource, DropTarget, } from 'react-dnd';
import api from 'src/api/api';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move'
};

const buttonStyle = {
    'margin-left': '1rem'
};

const reviewStyle = {
    padding: '0.5rem 1rem'
};

// eslint-disable-next-line react/prop-types
const MoveableItem = forwardRef(function Item({ index, item, getItems, isDragging, connectDragSource, connectDropTarget }, ref) {
    const [showReview, setShowReview] = useState(false);
    const rootElement = useRef(null);
    const reviewInput = useRef(null);
    connectDragSource(rootElement);
    connectDropTarget(rootElement);
    const opacity = isDragging ? 0 : 1;
    useImperativeHandle(ref, () => ({
        getNode: () => rootElement.current,
    }));

    const text = item.title;
    const review = item.review;
    const itemId = item.rank - 1;

    const updateReview = e => {
        e.preventDefault();
        const newReview = reviewInput?.current?.value || '';

        api.getMoviesFB().then(snapshot => {
          const movies = snapshot.val();
          movies[itemId].review = newReview;
          api.updateMoviesFB(movies).then(() => {
            getItems();
            setShowReview(false);
          });
        });
    };

    return (
      <div ref={rootElement} style={{ ...style, opacity }}>
        {index + 1} | {text} 
        <button style={buttonStyle} onClick={() => setShowReview(prev => !prev)}>
            {showReview ? 'cancel' : 'edit review'}
        </button>
        {showReview && (
            <form style={reviewStyle} method="post" onSubmit={updateReview}>
                <textarea name={`${itemId}_review`} ref={reviewInput} defaultValue={review || ''} />
                <button>save</button>
            </form>
        )}
      </div>);
});
export default DropTarget('item', {
    hover(props, monitor, component) {
        if (!component) {
            return null;
        }
        // node = HTML Div element from imperative API
        const node = component.getNode();
        if (!node) {
            return null;
        }
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }
        // Determine rectangle on screen
        const hoverBoundingRect = node.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        // Time to actually perform the action
        props.moveItem(dragIndex, hoverIndex);
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
}, (connect) => ({
    connectDropTarget: connect.dropTarget(),
}))(DragSource('item', {
    beginDrag: (props) => ({
        id: props.id,
        index: props.index,
    }),
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
}))(MoveableItem));
