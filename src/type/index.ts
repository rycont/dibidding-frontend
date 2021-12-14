export interface TypeUser {
    name: string;
    uid: string; // not 학번
    banned: boolean;
}

export interface TypeProduct {
    photo: string;
    name: string;
    category: string;
    description: string;
    startAt: number;
    uploader: TypeUser
}

export interface TypeSellingProduct extends TypeProduct {
    fixed_price: number;
}

export interface TypeBiddingProduct extends TypeProduct {
    usage: string;
    challenge: {
        created_at: number
        price: number
    }[]
    hasSucceed: boolean //나한테 낙찰됐나요?
    finished: boolean
    quotation: number;
}
