function createContainerList () {
    const container = document.querySelector('.container');
    const containerList = document.createElement('div');
    
    containerList.className = 'container-list';
    container.appendChild(containerList);    
}

createContainerList();