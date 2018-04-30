export class SharedModel {
  firstName: string;
  password: string;

  constructor() {

  }

  static fromJson(json: any): SharedModel {
    json = json || {};
    const obj = new SharedModel();
    obj.firstName = json.firstName || json.firstName || '';
    obj.password = json.currentPassword || json.currentPassword || '';
    return obj;
  }

}


