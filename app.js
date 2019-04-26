import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routers";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";



const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
/*
const middleware = (req, res, next) => {
  res.send("not happening");  
}; 
이렇게 미드웨어가 res를 하면 중간에 끊김
*/
app.use(localsMiddleware); // 이거 순서 밑에것들 global, user 보다 위에있어야함. 전체적으로 쓰려는건데 저것들보다 밑에서 쓰면 접근못함





app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;