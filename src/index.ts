import { Base } from "./base";
import { PaymentUI } from "./paymentUI";
import { Payment } from "./payments";
import { applyMixins } from "./utils/index.utils";

class Gazepay extends Base { }
interface Gazepay extends Payment { }

applyMixins(Gazepay, [Payment, PaymentUI]);

export default Gazepay;