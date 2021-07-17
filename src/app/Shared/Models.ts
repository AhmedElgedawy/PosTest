export interface IItems{


    // ItemId:number;
    // ItemName:string;
    // SalesPrice:number;
    // PurchasePrice:number;
    // CategoryName?:string;
    // ImageName?:string;
    // CategoryId?:number;



        itemId?: number;
        unitId: number;
       // unitNameAr: string;
        nameAr: string;
        nameEn: string;
        image?:string;
        createdBy: string;
        createDate?:Date ;
        updatedBy?:string;
        updateDate?:Date ;
        deletedBy?: string;
        deleteDate?: Date ;
        status?: string;
        unit?: any;
       



}



export interface ICustomers{



    CustNameAr :string ;
    CustNameEn:string;
    PhoneNo:string;
    AreaName: string;
    BlockNo:number;
    StreetNo:number;
     AvenueNo:number;
     HomeNo:number;
    BuildingNo:number;
     FlatNo:number;
     Notes?: string ;
     CreatedBy:string;
     UpdatedBy?:string;

}


export interface IUnits{


unitId: number;
unitNameAr: string;
unitNameEn: string;


}
