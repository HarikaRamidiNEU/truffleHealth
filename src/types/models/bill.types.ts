/**
 * Bill Entity.
 */
 export interface IBill {
    id: string,
    patientName: string,
    address: string,
    hospitalName: string,
    dateOfService: Date,
    amount: BigInt,
    createdDate: Date
}
