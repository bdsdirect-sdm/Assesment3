import sequelize from './config/database';
import express from 'express';
import User from './models/user'
import Address from './models/address';
import cors from 'cors';
import userRoutes from './routes/userRoute';
import bodyParser from 'body-parser';
// import upload from './middleware/multerMiddleware';

const app = express();
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req: any,res: any,next: any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);
app.use(express.json());

// app.use(bodyParser.json());
const port = 4000;

app.use("/", userRoutes);   


User.sync().then(()=>{
    console.log('Table sync')
});

Address.sync().then(()=>{
    console.log('Table sync');
    
});

sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
  }).catch(err => console.error("Unable to connect to the database:", err));