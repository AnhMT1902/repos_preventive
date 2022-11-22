import {Request, Response} from "express";
import {Spending} from "../model/spending";
class SpendingService {
      findAll = async ( req: Request, res: Response)=>{
          let spending = await Spending.find();
          console.log(spending)
          return res.status(200).json(spending)
      }

      addSpending = async (req:Request,res:Response)=>{
          let spending = await Spending.create(req.body);
          await spending.save()
          return res.status(200).json(spending);
      }

      deleteSpending = async(req:Request,res:Response)=>{
          let id = req.params.id
          let spending = await Spending.findOne({id})
          if (spending === null){
              return res.status(200).json({
                  message:'Not Found'
              })
          }else {
              await spending.deleteOne({_id: id})
              return res.status(200).json({
                  message:'Delete Success'
              })
          }
      }
}
export default new SpendingService()