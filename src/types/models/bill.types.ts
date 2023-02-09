/**
 * Bill Entity.
 */
 export interface IBill {
    patientName: string,
    address: string,
    hospitalName: string,
    dateOfService: string,
    amount: BigInt
}
