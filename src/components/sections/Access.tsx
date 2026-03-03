import React from 'react';
import Image from 'next/image';

export const Access = () => {
    return (
        <section className="bg-[#E6EDF2] py-16">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Logo Section */}
                <div className="flex justify-center mb-10">
                    <img
                        src="/assets/images/prfaitclinic_logo_yoko2-2.png"
                        alt="Parfait Clinic Logo"
                        className="h-24 md:h-32 object-contain"
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">
                    {/* Schedule Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="overflow-x-auto shadow-sm shadow-black/5 bg-white">
                            <table className="w-full text-sm text-center border-collapse">
                                <thead>
                                    <tr className="bg-[#88AFC6] text-gray-800 font-medium">
                                        <th className="p-3 border-r border-white/50 text-base">診療日・時間</th>
                                        <th className="p-3 border-r border-white/50 text-base">月</th>
                                        <th className="p-3 border-r border-white/50 text-base">火</th>
                                        <th className="p-3 border-r border-white/50 text-base">水</th>
                                        <th className="p-3 border-r border-white/50 text-base">木</th>
                                        <th className="p-3 border-r border-white/50 text-base">金</th>
                                        <th className="p-3 border-r border-white/50 text-base">土</th>
                                        <th className="p-3 text-base">日</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-gray-800 text-base">
                                    <tr className="border-b border-gray-100">
                                        <td className="p-3 border-r border-gray-100">9:00-13:00</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 text-gray-600">休</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="p-3 border-r border-gray-100">14:30-20:00</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 border-r border-gray-100 text-gray-400">-</td>
                                        <td className="p-3 text-gray-600">休</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border-r border-gray-100">14:00-18:00</td>
                                        <td className="p-3 border-r border-gray-100 text-gray-400">-</td>
                                        <td className="p-3 border-r border-gray-100 text-gray-400">-</td>
                                        <td className="p-3 border-r border-gray-100 text-gray-400">-</td>
                                        <td className="p-3 border-r border-gray-100 text-gray-400">-</td>
                                        <td className="p-3 border-r border-gray-100 text-gray-400">-</td>
                                        <td className="p-3 border-r border-gray-100 text-[#333]">●</td>
                                        <td className="p-3 text-gray-600">休</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 space-y-3 text-center lg:text-left text-gray-800">
                            <h3 className="text-2xl font-bold tracking-wider mb-2">パルフェクリニック・医科歯科</h3>
                            <p className="text-base text-gray-700">医科 / 歯科 / 矯正歯科 / 口腔外科 / 小児歯科</p>
                            <p className="text-base text-gray-700 mt-4 leading-relaxed">
                                〒107-0061 東京都港区北青山3丁目11番7号 Aoビル3F<br />
                                東京メトロ銀座線/半蔵門線/千代田線 「表参道駅」 B2出口より徒歩1分
                            </p>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:h-[400px] shadow-md border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3241.5!2d139.710655!3d35.663812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5a6e0b0001%3A0x3059b3f3b1e0a5f0!2z44OR44Or44OV44Kn44Kv44Oq44OL44OD44Kv44O75Yy756eR5q2v56eR!5e0!3m2!1sja!2sJP!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="パルフェクリニック・医科歯科 地図"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

