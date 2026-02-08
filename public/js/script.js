document.addEventListener('DOMContentLoaded', function(){
    const editButtons = document.querySelectorAll('.edit-btn');
    const editModal = document.getElementById('EditModal');
    const closeModal = document.querySelector('.close-modal');

    editButtons.forEach(button => {
        button.addEventListener('click', function(){
            const userId = this.getAttribute('data-id')
            const userName = this.getAttribute('data-name')
            const userEmail = this.getAttribute('data-email')

            document.getElementById('editId').value = userId
            document.getElementById('editName').value = userName
            document.getElementById('editEmail').value = userEmail


            editModal.style.display = 'block'
        });
    });

    closeModal.addEventListener('click', function(){
        editModal.style.display= 'none'
    })

    window.addEventListener('click', function(event){
        if(event.target == editModal){
            editModal.style.display = 'none'
        }
    })

    const createForm = document.getElementById('createForm')
    createForm.addEventListener('submit', function(event){
        const name = document.getElementById('createName').value.trim()
        const email = document.getElementById('createEmail').value.trim()

        if(!name || !email) {
            alert("PREENCHA TODOS OS CAMPOS!")
            event.preventDefault()
        }
    })

    const deleteButtons = document.querySelectorAll('.delete-btn')
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event){
            if(!confirm('Tem certeza que deseja excluir o usuário?')){
                event.preventDefault()
            }
        })
    })
    
})