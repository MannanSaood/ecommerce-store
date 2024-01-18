import Card from '../componenets/ui/Card';
import classes from './Orders.module.css';

function Orders(){
    return(
        <div>
            <div className={classes.container} >
            <div className={classes.message}><h3>You Have _ Orders</h3></div>
                <h1>Orders</h1>
                
                <div className={classes.Cartcontainer}>
                <Card>
                        
                </Card>
                </div>
            </div>
        </div>
    );
}

export default Orders;