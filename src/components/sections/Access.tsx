import React from 'react';

export const Access = () => {
    return (
        <section className="bg-parfait-bg-light">
            {/* Title Band: セクションの区切りを明確にする水色の帯 */}
            <div className="bg-parfait-blue py-10 text-center text-white">
                <div className="container mx-auto px-6">
                    <p className="text-[10px] tracking-[0.5em] uppercase text-white/60 mb-2">Clinic Information</p>
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wider">アクセス・医院案内</h2>
                </div>
            </div>

            <div className="py-12 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Schedule Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="overflow-x-auto shadow-sm">
                            <table className="w-full text-sm text-center border-collapse">
                                <thead>
                                    <tr className="bg-[#7EADC4] text-white">
                                        <th className="p-3 border border-white/20">診療日・時間</th>
                                        <th className="p-3 border border-white/20">月</th>
                                        <th className="p-3 border border-white/20">火</th>
                                        <th className="p-3 border border-white/20">水</th>
                                        <th className="p-3 border border-white/20">木</th>
                                        <th className="p-3 border border-white/20">金</th>
                                        <th className="p-3 border border-white/20">土</th>
                                        <th className="p-3 border border-white/20">日</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-gray-800">
                                    <tr>
                                        <td className="p-3 border border-gray-100">9:00-13:00</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100 text-gray-400">休</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-100">14:30-20:00</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100">-</td>
                                        <td className="p-3 border border-gray-100 text-gray-400">休</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-100">14:00-18:00</td>
                                        <td className="p-3 border border-gray-100">-</td>
                                        <td className="p-3 border border-gray-100">-</td>
                                        <td className="p-3 border border-gray-100">-</td>
                                        <td className="p-3 border border-gray-100">-</td>
                                        <td className="p-3 border border-gray-100">-</td>
                                        <td className="p-3 border border-gray-100">●</td>
                                        <td className="p-3 border border-gray-100 text-gray-400">休</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-12 space-y-4">
                            <h3 className="text-2xl font-serif text-gray-900">パルフェクリニック・医科歯科</h3>
                            <p className="text-sm text-gray-600">医科 / 歯科 / 矯正歯科 / 口腔外科 / 小児歯科</p>
                            <div className="text-sm text-gray-700 space-y-1">
                                <p>〒107-0061 東京都港区北青山3丁目11番7号 Aoビル3F</p>
                                <p>東京メトロ銀座線/半蔵門線/千代田線 「表参道駅」 B2出口より徒歩1分</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="w-full lg:w-1/2 aspect-video shadow-lg overflow-hidden">
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
