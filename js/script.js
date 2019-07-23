model = {
    projects: 
    [
        {
            id: 0,
            name: 'PyUnifi - Ubiquiti Python API',
            projectUrl: 'https://github.com/finish06/pyunifi',
            image: './images/pyunifi.png',
            alt: 'Pyunifi Image'
        },
        {
            id: 1,
            name: 'Home Assistant Wifi Client Switch',
            projectUrl: 'https://github.com/finish06/unifi_access_switch',
            image: './images/access_switch.png',
            alt: 'Unifi Access Switch Image'
        },
        {
            id: 2,
            name: 'My Personal Website',
            projectUrl: 'https://github.com/finish06/personal_website',
            image: './images/personal_website.png',
            alt: 'Personal Website Image'
        }
    ]
}

octopus = {
    getProjects: function() {
        let num1 = Math.floor(Math.random() * 3);
        let num2;
        do {
            num2 = Math.floor(Math.random() * 3);
        } while (num1 == num2);

        projectsView.init(model.projects[num1], model.projects[num2]);
    }
}

projectsView = {
    init: function(num1, num2) {
        this.work = document.getElementsByClassName('work');
        this.projects = [num1, num2]

        projectsView.render();
    },

    render: function() {
        for (let i = 0; i < 2; i++) {
            let num = this.projects[i];
            let img = this.work[i].firstElementChild;
            img.src = num.image;
            img.alt = num.alt
            let fig = this.work[i].lastElementChild;
            fig.firstChild.href = num.projectUrl;
            fig.firstChild.innerHTML = num.name;
        }
    }
}

octopus.getProjects();