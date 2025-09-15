#!/bin/bash
echo "🐳 Запуск PostgreSQL для учебного проекта..."
docker-compose up -d
echo "✅ База данных запущена на localhost:5432"
echo "📊 Имя базы: project_db"
echo "👤 Пользователь: worker"
echo "🔑 Пароль: 0000"
read -p "Press any key to continue..."