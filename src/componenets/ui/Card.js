import classes from './Card.module.css';

function Card(props){
    return(
        <div className={classes.align}>
            <div className={classes.Cards}>{props.children}</div>
        </div>

    );
}

export default Card;