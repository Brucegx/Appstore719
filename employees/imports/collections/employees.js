// Declare our collection

import { Mongo } from 'meteor/mongo';


export const Employees = new Mongo.Collection('employees');
//because we will export other more object so we can not use the export default which means that we will use only this.


