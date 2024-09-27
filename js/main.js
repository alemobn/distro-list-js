function createContainerList () {
    const container = document.querySelector('.container');
    const containerList = document.createElement('div');
    
    containerList.className = 'container-list';
    container.appendChild(containerList);    
}

function createDistroList () {
    const containerList = document.querySelector('.container-list');
    const debian = document.createElement('div');
    const fedora = document.createElement('div');
    
    debian.className = 'debian';
    fedora.className = 'fedora';
    
    containerList.appendChild(debian);
    containerList.appendChild(fedora);
}

createContainerList();
createDistroList();