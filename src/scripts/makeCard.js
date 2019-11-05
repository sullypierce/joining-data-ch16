const makeCard = {
    employeeCard : (emplObj) => {
        const htmltext = `<article class="employee">
        <header class="employee__name">
            <h1>${emplObj.name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${emplObj.department.name} department
        </section>
        <section class="employee__computer">
            Currently using a ${emplObj.computer.model}
        </section>
        </article>`
        return htmltext
    }
}

export default makeCard