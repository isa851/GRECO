import React, { useState } from 'react';
import { Trophy, Medal, MapPin, Calendar, User, Flag, Target, Award } from 'lucide-react';
import logo from "./photo_2025-07-22_12-46-22.jpg"
function App() {
  const [activeTab, setActiveTab] = useState('greco-roman');

  return (
    <div className="min-h-screen bg-white">
      {/* Wikipedia-style header */}
      <div className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Статья</span>
            <span>Обсуждение</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex-1">
            <h1 className="text-3xl font-normal mb-4 border-b-3 border-gray-300 pb-2">
              Борец Греко-Римского Стиля
            </h1>

            {/* Info box - Wikipedia style */}
            <div className="float-right ml-6 mb-6 w-80 border border-gray-300 bg-gray-50">
              {/* Photo section */}
              <div className="bg-gray-800 text-white text-center py-3">
                <h3 className="font-semibold">Борец Греко-Римского Стиля</h3>
              </div>
              
              <div className="p-4">
                {/* Placeholder for photo */}
                <div className=" h-64   mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                  <img className="w-full  h-64" src={logo} alt="Логотип" />
                  </div>
                </div>

                <h4 className="font-semibold mb-3 text-center border-b border-gray-300 pb-1">
                  Личная информация
                </h4>

                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Пол</td>
                      <td className="py-1 font-medium">мужской</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Страна</td>
                      <td className="py-1">
                        <div className="flex items-center gap-1">
                          <div className="">
                            {/* <div className="w-1/3 bg-white"></div>
                            <div className="w-1/3 bg-blue-500"></div>
                            <div className="w-1/3 bg-red-500"></div> */}
                          </div>
                          <span className="text-blue-600 hover:underline cursor-pointer">Кыргызстан</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Специализация</td>
                      <td className="py-1 text-blue-600 hover:underline cursor-pointer">греко-римская борьба</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Клуб</td>
                      <td className="py-1 text-blue-600 hover:underline cursor-pointer">C.К Толойкон</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Дата рождения</td>
                      <td className="py-1">
                        <span className="text-blue-600 hover:underline cursor-pointer">2011</span>
                        <br />
                        <span className="text-gray-600 text-xs">(15 лет)</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Место рождения</td>
                      <td className="py-1">
                        <span className="text-blue-600 hover:underline cursor-pointer">Кыргызстан</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="font-semibold mt-4 mb-3 text-center border-b border-gray-300 pb-1">
                  Спортивная карьера
                </h4>

                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Активные годы</td>
                      <td className="py-1">2024-2025</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Тренеры</td>
                      <td className="py-1 text-blue-600 hover:underline cursor-pointer">Курманбек</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Рост</td>
                      <td className="py-1">163 см</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Вес</td>
                      <td className="py-1">до 52 кг</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-2 text-gray-700 align-top">Спортивное звание</td>
                      <td className="py-1">КМС</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Main article content */}
            <div className="text-justify leading-relaxed">
              <p className="mb-4">
                <strong>Борец греко-римского стиля</strong> — Кыргызский спортсмен, специализирующийся на 
                <span className="text-blue-600 hover:underline cursor-pointer"> греко-римской борьбе</span>. 
                За свою карьеру завоевал <strong>16 медалей</strong> на различных соревнованиях, 
                включая <strong>6 золотых</strong>, <strong>2 серебряные</strong> и <strong>8 бронзовых медалей</strong>.
              </p>

              <p className="mb-4">
                <span className="text-blue-600 hover:underline cursor-pointer">Греко-римская борьба</span> — 
                это олимпийский вид спорта, в котором разрешены захваты и действия только выше пояса. 
                Этот стиль борьбы требует особой техники, силы верхней части тела и тактического мышления.
              </p>

              <h2 className="text-xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                Содержание
              </h2>
              <div className="bg-gray-50 border border-gray-300 p-4 mb-6">
                <ol className="list-decimal list-inside space-y-1 text-blue-600">
                  <li className="hover:underline cursor-pointer">Биография</li>
                  <li className="hover:underline cursor-pointer">Спортивная карьера</li>
                  <li className="hover:underline cursor-pointer">Достижения</li>
                  <li className="hover:underline cursor-pointer">Награды и медали</li>
                  <li className="hover:underline cursor-pointer">Статистика</li>
                </ol>
              </div>

              <h2 className="text-xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                Биография
              </h2>
              <p className="mb-4">
                Начал заниматься борьбой в раннем возрасте и быстро проявил себя как перспективный атлет. 
                Спортивная карьера началась в 2020 году и характеризуется постоянным ростом мастерства и достижений.
              </p>

              <h2 className="text-xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                Спортивная карьера
              </h2>
              <p className="mb-4">
                Участие в многочисленных соревнованиях различного уровня способствовало формированию 
                богатого соревновательного опыта. 
              </p>

              <h2 className="text-xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                Достижения
              </h2>
              <p className="mb-4">
                За свою карьеру завоевал <strong>16 медалей</strong> на соревнованиях различного уровня:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li><strong>6 золотых медалей</strong> — первые места на турнирах</li>
                <li><strong>2 серебряные медали</strong> — вторые места на соревнованиях</li>
                <li><strong>8 бронзовых медалей</strong> — третьи места на различных турнирах</li>
              </ul>

              <h2 className="text-xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                Награды и медали
              </h2>

              {/* Medal tables */}
              <div className="mb-6">
                <div className="flex border-b border-gray-300 mb-4">
                  <button
                    onClick={() => setActiveTab('greco-roman')}
                    className={`px-4 py-2 border-b-2 ${
                      activeTab === 'greco-roman' 
                        ? 'border-blue-600 text-blue-600 bg-blue-50' 
                        : 'border-transparent text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Греко-римская борьба
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-3 mb-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Соревнования</h3>
                </div>

                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Золото</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Соревнование</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Весовая категория</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-yellow-50 font-semibold">Золото</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">ХБК 2025</td>
                      <td className="border border-gray-300 px-3 py-2">до 48 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-yellow-50 font-semibold">Золото</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Лига 2025</td>
                      <td className="border border-gray-300 px-3 py-2">до 44 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-yellow-50 font-semibold">Золото</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Араван 2025</td>
                      <td className="border border-gray-300 px-3 py-2">до 44 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-yellow-50 font-semibold">Золото</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">ХБК 2024</td>
                      <td className="border border-gray-300 px-3 py-2">до 44 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-yellow-50 font-semibold">Золото</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Дюсш 2024 </td>
                      <td className="border border-gray-300 px-3 py-2">до 44 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-yellow-50 font-semibold">Золото</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Жапалак 2023</td>
                      <td className="border border-gray-300 px-3 py-2">до 32 кг</td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Серебро</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Соревнование</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Весовая категория</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-gray-50 font-semibold">Серебро</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Дюсш 2024</td>
                      <td className="border border-gray-300 px-3 py-2">до 44 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-gray-50 font-semibold">Серебро</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Жапалак 2023 </td>
                      <td className="border border-gray-300 px-3 py-2">до 38 кг</td>
                    </tr>
                  </tbody>
                </table>

                <table className="w-full border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Бронза</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Соревнование</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Весовая категория</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Ысык-Куль 2025</td>
                      <td className="border border-gray-300 px-3 py-2">до 48 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer"> Ысык-Куль 2025 </td>
                      <td className="border border-gray-300 px-3 py-2">до 48 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer"> Кызыл-кыя 2025 </td>
                      <td className="border border-gray-300 px-3 py-2">до 48 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer"> Алай 2024</td>
                      <td className="border border-gray-300 px-3 py-2">до 46 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer"> Кызыл-кыя 2023</td>
                      <td className="border border-gray-300 px-3 py-2">до 39 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Кызыл-кыя 2023</td>
                      <td className="border border-gray-300 px-3 py-2">до 39 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">АК-тилек 2022</td>
                      <td className="border border-gray-300 px-3 py-2">до 33 кг</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 bg-orange-50 font-semibold">Бронза</td>
                      <td className="border border-gray-300 px-3 py-2 text-blue-600 hover:underline cursor-pointer">Толойкон 2022</td>
                      <td className="border border-gray-300 px-3 py-2">до 33 кг</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-normal mt-8 mb-4 border-b border-gray-300 pb-1">
                Статистика
              </h2>
              <div className="bg-gray-50 border border-gray-300 p-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Общая статистика</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Всего медалей: <strong>16</strong></li>
                      <li>Процент побед: <strong>85%</strong></li>
                      <li>Активные годы: <strong>3 лет</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Медали по типам</h4>
                    <ul className="space-y-1 text-sm">
                      <li>🥇 Золотых: <strong>6</strong></li>
                      <li>🥈 Серебряных: <strong>2</strong></li>
                      <li>🥉 Бронзовых: <strong>8</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;