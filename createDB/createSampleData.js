db = db.getSiblingDB('su_tutor')
db.createCollection('students')
studentCollection = db.getCollection("students")
studentCollection.remove({})
studentCollection.insert(
    {
        firstName:"John",
        lastName:"Howey",
        email:"hgreethamy@booking.com",
        major: "Computer Science",
        suId:4
    }
)
studentCollection.insert(
    {
        firstName:"Mary",
        lastName:"Poppy",
        email:"phancillw@nydailynews.com",
        major: "Electrical Engineering",
        suId:5
    }
)
studentCollection.insert(
    {
        firstName:"cruxtonz",
        lastName:"Cele",
        email:"ccheesleyz@wix.com",
        major: "Computer Science",
        suId:6
    }

)
studentCollection.insert(
    {
        firstName:"olindermann10",
        lastName:"Owen",
        email:"oweddup10@blogtalkradio.com",
        major: "Business Studies",
        suId:7
    }

)
db.createCollection('tutors')
tutorCollection = db.getCollection("tutors")
tutorCollection.remove({})

tutorCollection.insert(
    {
        firstName: "Kenny",
        lastName:"Joshua",
        email: "KJ@SU.edu",
        bio: "A 4.2 student",
        suId: 1,
        available: false,
        workingHours: 10,
        isSelected: false
    }
)
tutorCollection.insert(
    {
        firstName: "John",
        lastName:"DOE",
        email: "JohnDoe@su.com",
        bio: "john the tutor",
        suId: 2,
        available: false,
        workingHours: 10,
        isSelected: false

    }
)
tutorCollection.insert(
    {
        firstName: "Ronald",
        lastName:"Dinho",
        email: "Ronal@underground.com",
        bio: "Will do homework for you",
        suId: 3,
        available: false,
        workingHours: 10,
        isSelected: false

    }
)
tutorCollection.insert(
    {
        firstName: "Duc",
        lastName:"Vu",
        email: "Vuduc@underground.com",
        bio: "A 4.2 GPA student",
        suId: 7,
        available: true,
        workingHours: 10,
        isSelected: false
    }
)
    