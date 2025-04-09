export const MOCK_ELEMENTS = [
  {
    "id": "1",
    "type": "sortable",
    "title": "Elemento ordenável 1",
    "items": [
      {
        "id": "el-1",
        "type": "link",
        "link": "#",
        "text": "Elemento 1",
        "value": "$40,000"
      },
      {
        "id": "el-2",
        "type": "link",
        "link": "#",
        "text": "Elemento 2",
        "value": "$40,000"
      },
      {
        "id": "el-3",
        "type": "link",
        "link": "#",
        "text": "Elemento 3",
        "value": "$40,000"
      },
      {
        "id": "el-4",
        "type": "link",
        "link": "#",
        "text": "Elemento 4",
        "value": "$40,000"
      }
    ]
  },
  {
    "id": "2",
    "type": "sortable",
    "title": "Elemento ordenável 2",
    "items": [
      {
        "type": "link",
        "link": "#",
        "text": "Lista de Tarefas",
        "items": [
          {
            "id": "ts-1",
            "type": "checkbox",
            "value": "false",
            "text": "Tarefa 1",
            "subText": "10:30 AM"
          },
          {
            "id": "ts-2",
            "type": "checkbox",
            "value": "false",
            "text": "Tarefa 2",
            "subText": "11:30 AM"
          },
          {
            "id": "ts-3",
            "type": "checkbox",
            "value": "false",
            "text": "Tarefa 3",
            "subText": "12:30 AM"
          }
        ]
      },
      {
        "type": "link",
        "link": "#",
        "text": "Grade de cores",
        "items": [
          {
            "id": "gc-1",
            "type": "color",
            "value": "#4e73df",
            "text": "Primary"
          },
          {
            "id": "gc-2",
            "type": "color",
            "value": "#1cc88a",
            "text": "Success"
          },
          {
            "id": "gc-3",
            "type": "color",
            "value": "#36b9cc",
            "text": "Info"
          },
          {
            "id": "gc-4",
            "type": "color",
            "value": "#f6c23e",
            "text": "Warning"
          },
          {
            "id": "gc-5",
            "type": "color",
            "value": "#e74a3b",
            "text": "Danger"
          },
          {
            "id": "gc-6",
            "type": "color",
            "value": "#858796",
            "text": "Secondary"
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "type": "sortable",
    "title": "Elemento ordenável 3",
    "items": [
      {
        "id": "prod-1",
        "type": "link",
        "link": "#",
        "text": "Produto 1",
        "product": {
          "name": "Nome do Produto 1",
          "description": "Descrição do Produto"
        }
      },
      {
        "id": "prod-2",
        "type": "link",
        "link": "#",
        "text": "Produto 2",
        "product": {
          "name": "Nome do Produto 2",
          "description": "Descrição do Produto"
        }
      },
      {
        "id": "prod-3",
        "type": "link",
        "link": "#",
        "text": "Produto 3",
        "product": {
          "name": "Nome do Produto 3",
          "description": "Descrição do Produto"
        }
      },
      {
        "id": "prod-4",
        "type": "link",
        "link": "#",
        "text": "Produto 4",
        "product": {
          "name": "Nome do Produto 4",
          "description": "Descrição do Produto"
        }
      }
    ]
  },
  {
    "id": "4",
    "type": "sortable",
    "title": "Elemento ordenável 4",
    "items": [
      {
        "id": "img-1",
        "type": "link",
        "link": "#",
        "text": "Imagem 1",
        "src": "./src/assets/placeholder.png"
      },
      {
        "id": "img-2",
        "type": "link",
        "link": "#",
        "text": "Imagem 2",
        "src": "./src/assets/placeholder.png"
      }
    ]
  },
  {
    "id": "5",
    "type": "sortable",
    "title": "Elemento ordenável 5",
    "items": [
      {
        "id": "card-1",
        "type": "link",
        "link": "#",
        "text": "Título",
        "subText": "Subtítulo",
        "src": "./src/assets/placeholder.png",
        "alt": "Imagem 1",
        "buttons": [
          {
            "action": "#",
            "text": "Botão 1",
            "style": "btn-primary"
          },
          {
            "action": "#",
            "text": "Botão 2",
            "style": "btn-light"
          }
        ]
      }
    ]
  }
]