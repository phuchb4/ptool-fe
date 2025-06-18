import Link from "next/link";

export default function Homepage() {
    return(
        <div className="min-h-screen bg-white">
            <div className="max-w-screen ml-40 mr-40">
                <div className="flex items-center justify-center my-4">
                    <div className="flex-grow h-px bg-black mx-2"></div>
                    <h2 className="text-red-600 font-bold text-2xl">Sản phẩm bán chạy</h2>
                    <div className="flex-grow h-px bg-black mx-2"></div>
                </div>
                <div className="mt-15">
                    <div>
                        <h2 className="flex justify-start font-bold text-3xl">
                            <Link href="" className="hover:text-blue-900">Áo câu lạc bộ</Link>
                        </h2>
                        <a href="" className="flex justify-end hover:text-blue-900">
                            Xem tất cả {'>'}
                        </a>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <div className="flex-1 text-center rounded">
                            <img src="/ao-clb-banner.png" alt="Áo câu lạc bộ" />
                        </div>
                        <div className="flex-1 text-center rounded">
                            sp2
                        </div>
                        <div className="flex-1 text-center rounded">sp3</div>
                        <div className="flex-1 text-center rounded">sp4</div>
                        <div className="flex-1 text-center rounded">sp5</div>
                    </div>
                </div>
                <div className="mt-15">
                    <div>
                        <h2 className="flex justify-start font-bold text-3xl">
                            <Link href="" className="hover:text-blue-900">Áo đội tuyển quốc gia</Link>
                        </h2>
                        <a href="" className="flex justify-end hover:text-blue-900">
                            Xem tất cả {'>'}
                        </a>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <div className="flex-1 text-center rounded">
                            <img src="/ao-doi-tuyen-banner.jpg" alt="Áo đội tuyển quốc gia" />
                        </div>
                        <div className="flex-1 text-center rounded">
                            sp2
                        </div>
                        <div className="flex-1 text-center rounded">sp3</div>
                        <div className="flex-1 text-center rounded">sp4</div>
                        <div className="flex-1 text-center rounded">sp5</div>
                    </div>
                </div>
                <div className="mt-15">
                    <div>
                        <h2 className="flex justify-start font-bold text-3xl">
                            <Link href="" className="hover:text-blue-900">Áo training</Link>
                        </h2>
                        <a href="" className="flex justify-end hover:text-blue-900">
                            Xem tất cả {'>'}
                        </a>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <div className="flex-1 text-center rounded">
                            <img src="/ao-training-banner.jpg" alt="Áo training" />
                        </div>
                        <div className="flex-1 text-center rounded">
                            sp2
                        </div>
                        <div className="flex-1 text-center rounded">sp3</div>
                        <div className="flex-1 text-center rounded">sp4</div>
                        <div className="flex-1 text-center rounded">sp5</div>
                    </div>
                </div>
                                <div className="mt-15">
                    <div>
                        <h2 className="flex justify-start font-bold text-3xl">
                            <Link href="" className="hover:text-blue-900">Giày bóng đá</Link>
                        </h2>
                        <a href="" className="flex justify-end hover:text-blue-900">
                            Xem tất cả {'>'}
                        </a>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <div className="flex-1 text-center rounded">
                            <img src="/giay-banner.jpg" alt="Giày bóng đá" />
                        </div>
                        <div className="flex-1 text-center rounded">
                            sp2
                        </div>
                        <div className="flex-1 text-center rounded">sp3</div>
                        <div className="flex-1 text-center rounded">sp4</div>
                        <div className="flex-1 text-center rounded">sp5</div>
                    </div>
                </div>
                                <div className="mt-15">
                    <div>
                        <h2 className="flex justify-start font-bold text-3xl">
                            <Link href="" className="hover:text-blue-900">Phụ kiện</Link>
                        </h2>
                        <a href="" className="flex justify-end hover:text-blue-900">
                            Xem tất cả {'>'}
                        </a>
                    </div>
                    <div className="flex gap-5 mt-4">
                        <div className="flex-1 text-center rounded">
                            <img src="/phu-kien-banner.jpg" alt="Phụ kiện" />
                        </div>
                        <div className="flex-1 text-center rounded">
                            sp2
                        </div>
                        <div className="flex-1 text-center rounded">sp3</div>
                        <div className="flex-1 text-center rounded">sp4</div>
                        <div className="flex-1 text-center rounded">sp5</div>
                    </div>
                </div>
            </div>
        </div>
    );
}