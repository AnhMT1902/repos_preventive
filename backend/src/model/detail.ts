import {IWallet} from "./wallet";
import {ISpending} from "./spending";
import {model, Schema} from "mongoose";
interface IDetail{
    money?:number,
    idWallet?:IWallet
    idSpending?:ISpending
}
const DetailSchema = new Schema<IDetail>({
    money:Number,
    idWallet:{
        type:Schema.Types.ObjectId,
        ref:'Wallet'
    },
    idSpending:{
        type:Schema.Types.ObjectId,
        ref:'Spending'
    }
});
const Detail=model<IDetail>('Detail',DetailSchema);
export {Detail};