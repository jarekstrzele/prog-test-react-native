#Tworzenie klasy
class Zwierzak: 
    def __init__(self):
        self.mood = 'szczesliwy'
    def set_mood(self, new_mood):
        self.mood = new_mood
    def get_mood(self):
        return self.mood 
#Tworzenie zwierzaka 
zwierzak = Zwierzak() 
#Funkcja główna
def main():  
    print("0 - Wyjście")
    print("1 - Rozmowa ze zwierzakiem")
    print("2 - Karmienie zwierzaka")
    print("3 - Zabawa ze zwierzakiem") 
#Pobieranie wyboru uzytkownika
main()
while True:
    choice = int(input("Wybierz opcję: ")) 
    
    #Funkcja rozmowy 
    def talk():
        print("Rozmawiasz ze zwierzakiem.")
        if zwierzak.get_mood() == 'szczesliwy':
            zwierzak.set_mood('zadowolony')
            print(zwierzak.get_mood())
        elif zwierzak.get_mood() == 'zadowolony':
            zwierzak.set_mood('poddenerwowany')
            print(zwierzak.get_mood())
        elif zwierzak.get_mood() == 'poddenerwowany':
            zwierzak.set_mood('wściekły')
            print(zwierzak.get_mood())
        elif zwierzak.get_mood() == 'wściekły':
            zwierzak.set_mood('martwy')
            print(zwierzak.get_mood())
        else: print("Zwierzak nie żyje.") 
#Funkcja karmienia
    def feed():
        print("Karmisz zwierzaka.")
        if zwierzak.get_mood() == 'poddenerwowany':
            zwierzak.set_mood('zadowolony')
            print(zwierzak.get_mood())
        elif zwierzak.get_mood() == 'wściekły':
            zwierzak.set_mood('zadowolony')
            print(zwierzak.get_mood())
        elif zwierzak.get_mood() == 'martwy':
            print("Zwierzak nie żyje.")
        else: print("Zwierzak jest zadowolony.")
#Funkcja zabawy 
    def play():
        print("Bawisz się ze zwierzakiem.")
        if zwierzak.get_mood() == 'szczesliwy':
            zwierzak.set_mood('zadowolony')
            print(zwierzak.get_mood())
        elif zwierzak.get_mood() == 'zadowolony':
            zwierzak.set_mood('szczesliwy')
            print(zwierzak.get_mood())
        elif zwierzak.get_mood() == 'martwy':
            print("Zwierzak nie żyje.")
        else: zwierzak.set_mood('szczesliwy')
#Wywołanie funkcji głównej

#Obsługa wyboru uzytkownika 
    if choice == 0:
        print("Do zobaczenia!")
    elif choice == 1:
        talk()
    elif choice == 2:
        feed()
    elif choice == 3:
        play()
    else: print("Błędny wybór!") 
