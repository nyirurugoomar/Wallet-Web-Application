export declare class Budget {
    limit: number;
    currentSpent?: number;
    categoryId: string;
}
export declare const BudgetSchema: import("mongoose").Schema<Budget, import("mongoose").Model<Budget, any, any, any, import("mongoose").Document<unknown, any, Budget> & Budget & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Budget, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Budget>> & import("mongoose").FlatRecord<Budget> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
