export type CreatePaymentResponse = {
    statusCode: number,
    success: boolean;
    message: string;
    payload: {
        paymentUrl: string
    }
}