import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-open-sans">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Business Card */}
          <Card className="mb-12 shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                
                {/* Photo */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src="/img/a7c92733-0580-40d6-a0f8-e881cc7c7a70.jpg" 
                      alt="Страховой агент"
                      className="w-48 h-48 rounded-full object-cover border-4 border-warm-orange shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-warm-orange text-white p-3 rounded-full shadow-lg">
                      <Icon name="Shield" size={24} />
                    </div>
                  </div>
                </div>

                {/* Main Info */}
                <div className="md:col-span-2 text-center md:text-left">
                  <h1 className="text-4xl font-montserrat font-bold text-gray-800 mb-2">
                    Александр Петров
                  </h1>
                  <p className="text-xl text-warm-orange font-semibold mb-4">
                    Персональный страховой агент
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                    <Badge className="bg-warm-orange/10 text-warm-orange border-warm-orange/20">
                      <Icon name="Car" size={16} className="mr-1" />
                      Автострахование
                    </Badge>
                    <Badge className="bg-warm-orange/10 text-warm-orange border-warm-orange/20">
                      <Icon name="Clock" size={16} className="mr-1" />
                      Работаю 24/7
                    </Badge>
                    <Badge className="bg-warm-orange/10 text-warm-orange border-warm-orange/20">
                      <Icon name="Award" size={16} className="mr-1" />
                      8 лет опыта
                    </Badge>
                  </div>

                  {/* Contact Button */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button 
                      size="lg" 
                      className="bg-warm-orange hover:bg-warm-dark text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (495) 123-45-67
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                    >
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Написать в WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-center text-gray-800 mb-8">
              Специализация по автострахованию
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "ShieldCheck",
                  title: "ОСАГО",
                  description: "Обязательное страхование гражданской ответственности. Быстрое оформление за 15 минут."
                },
                {
                  icon: "Car",
                  title: "КАСКО", 
                  description: "Добровольное страхование автомобиля от угона, ДТП и других рисков. Индивидуальные условия."
                },
                {
                  icon: "Users",
                  title: "Страхование пассажиров",
                  description: "Защита водителя и пассажиров от несчастных случаев во время поездок."
                }
              ].map((service, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="bg-warm-orange/10 p-4 rounded-full">
                        <Icon name={service.icon} size={32} className="text-warm-orange" />
                      </div>
                    </div>
                    <CardTitle className="font-montserrat text-gray-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Me */}
          <Card className="mb-12 border-0 bg-gradient-to-r from-warm-orange to-warm-light text-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold text-center mb-8">
                Почему выбирают меня?
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    icon: "Clock",
                    title: "Быстро",
                    description: "Оформление за 15 минут"
                },
                {
                    icon: "DollarSign", 
                    title: "Выгодно",
                    description: "Лучшие тарифы на рынке"
                },
                {
                    icon: "Headphones",
                    title: "Поддержка",
                    description: "Консультации 24/7"
                },
                {
                    icon: "Award",
                    title: "Надёжно",
                    description: "8 лет безупречной работы"
                }
              ].map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon name={advantage.icon} size={28} className="text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{advantage.title}</h4>
                  <p className="text-sm opacity-90">{advantage.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Contact CTA */}
          <Card className="text-center border-0 bg-gray-50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-4">
                Нужна консультация по автострахованию?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Позвоните прямо сейчас или оставьте заявку. Подберу оптимальный полис 
                с учётом ваших потребностей и бюджета.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-warm-orange hover:bg-warm-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white font-semibold px-8 py-4 rounded-full"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;