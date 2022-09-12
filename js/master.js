i = 0
k = 10
let myData = ''
fetch('../json/tst.json')
    .then(res => res.json())
    .then(all => {
        myData = all.results

        circle(myData)
    })


function load() {
    k += 10
    circle(myData)
}



function circle(myData) {

    class shortStroy {
        constructor(fname, lname, img, age, email) {
            this.Firstn = fname
            this.Lastn = lname
            this.Img = img
            this.Age = age
            this.Email = email
        }


        FullName() {
            let getName = `
                            <h2>${this.Firstn} ${this.Lastn}</h2>
                        `
            return getName
        }

        AgeP() {
            let getAge = `
                <p>${this.Age}</p>
            `
            return getAge
        }

        EmailP() {
            let getEmail = `
                <p>${this.Email}</p>
            `
            return getEmail
        }

        Picture() {
            let img = `
                            <img src='${this.Img}'>   
                        `
            return img
        }


        Wrapper() {
            let _div = `
                            <div>
                            <figure>
                            ${this.Picture()}
                            </figure>
                            ${this.FullName()}
                            ${this.AgeP()}
                            ${this.EmailP()}
                            </div>
                            `
            return _div
        }
    }

    for (i; i < k; i++) {
        let _par = document.createElement('div')
        let InsShort = new shortStroy(myData[i].name.first, myData[i].name.last, myData[i].picture.large, myData[i].dob.age, myData[i].email)
        _par = InsShort.Wrapper()
        document.getElementsByTagName('main')[0].innerHTML += _par
    }


}