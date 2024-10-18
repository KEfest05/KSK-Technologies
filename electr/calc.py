width = float(input("Ширина платы (мм): "))
length = float(input("Длина платы (мм): "))

Square = (width * length)/100

perekis = Square
kislota = 0.3*Square
solt = 0.05*Square

print(f"Перекись: {round(perekis, 2)} мл")
print(f"Лимонная кислота: {round(kislota, 2)} г")
print(f"Соль: {round(solt, 2)} г")


