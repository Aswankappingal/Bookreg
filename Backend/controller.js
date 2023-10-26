import schema from "./user.model.js"
export function gettask(req,res){
    const {...movies}=req.body
    console.log(req.body);
    res.status(201).send(schema.create({...movies}));

}