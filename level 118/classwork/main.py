import random

leaders = ["Kote Ximshiashvili", "nata kvantali", "giorgi shvadze", "luka tatuashvili", "Nata Kvantaliani", "davit mefarishvili", "ilia dzindzibadze", " davit adesihvili"]

students = ['ნიკოლოზ ჭიტაძე','გიო მინდორაშვილი',
    'ზუკა ქორიძე', 'მათე ჭიკაძე', 'რატი ჩიგოგიძე',
    'ბერდია ბექაური', 'საბა ისაკაძე', 'ლაშა გიორგი '
    'აზალაძე', 'ნიკა მაჭარაშვილი', 'დათა ფოფხაძე',
    'გობრონ წითლაური', 'გიგა კოჩალიძე']


def distribution_in_groups(leaders, students):
    groups = []
    index = 0

    while index < len(students):
        for i in leaders:
            if index < len(students):
                group = {
                    'leader': i,
                    'students': []
                }
                students_num = random.randint(1,3)

                if students_num > len(students) - index:
                    students_num = len(students) - index

                for i in range(students_num):
                    if index < len(students):
                        group['students'].append(students[index])
                        index += 1
                
                groups.append(group)

    return groups
groups = distribution_in_groups(leaders, students)
for group in groups:
    print(f"{group['leader']}:")
    for student in group['students']:
        print(f" [{student}")
