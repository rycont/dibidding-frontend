export interface TypeUser {
    name: string
    user_id: string
    user_photo: string
    student_id: string
    dimigoin_uid: number
}

export interface TypeProduct {
    photo: string;
    photo2: string;
    photo3: string;
    seller_id: string;
    name: string;
    category: string;
    description: string;
    start_datetime: Date;
    end_datetime: Date;
    start_price: number;
}

export interface TypeSellingProduct extends TypeProduct {
    fixed_price: number;
}

export interface TypeBiddingProduct extends TypeProduct {
    bidding_latency: number;
    condition: string
    lastBid: number;
}
