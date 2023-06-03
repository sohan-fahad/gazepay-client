import { Base } from "../base";
import { CreatePaymentResponse } from "./types";

export class Payment extends Base {

    initizitingPayment(amount: number, orderCode = ""): Promise<CreatePaymentResponse> {
        return this.request('/gazepay/init', {
            method: "POST",
            body: JSON.stringify({ apiKey: this.apiKey, apiSecret: this.apiSecret, amount, callbackUrl: "", payerReference: "", orderCode })
        })
    }
}
