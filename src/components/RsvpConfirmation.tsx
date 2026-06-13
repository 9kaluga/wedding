import React, { useState, useRef, useEffect } from "react";

const RsvpConfirmation: React.FC = () => {
  const [clickAttempts, setClickAttempts] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [isButtonMovable, setIsButtonMovable] = useState(true); // Состояние для блокировки перемещения после 3 раз
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const touchStartedRef = useRef(false);

  // Инициализация позиции кнопки при монтировании
  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      setButtonPosition({
        x: containerRect.width / 2 - 125, // центр по ширине (250px ширина кнопки / 2)
        y: 20, // центр по высоте (50px высота кнопки / 2), отступ сверху, увеличен из-за надписи
      });
    }
  }, []);

  const moveButtonToRandomSide = (containerRect: DOMRect) => {
    if (!buttonRef.current) return;

    const buttonWidth = buttonRef.current.offsetWidth; // 250
    const buttonHeight = buttonRef.current.offsetHeight; // 50

    // Вычисляем допустимые границы для позиции кнопки внутри контейнера
    const maxX = containerRect.width - buttonWidth - 10; // отступ 10px
    const maxY = containerRect.height - buttonHeight - 10; // отступ 10px
    const minX = 10;
    const minY = 10;

    let newX, newY;
    // Определяем случайную сторону: 0 - верх, 1 - право, 2 - низ, 3 - лево
    const side = Math.floor(Math.random() * 4);

    switch (side) {
      case 0: // Верх
        newX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        newY = minY;
        break;
      case 1: // Право
        newX = maxX;
        newY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        break;
      case 2: // Низ
        newX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        newY = maxY;
        break;
      case 3: // Лево
        newX = minX;
        newY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        break;
      default:
        // На всякий случай, если что-то пойдет не так
        newX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        newY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    }

    setButtonPosition({ x: newX, y: newY });
  };

  const handleClick = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => {
    // Проверяем, начато ли взаимодействие через Touch
    if (touchStartedRef.current) {
      // Если взаимодействие начато через Touch, игнорируем Click (или повторный Touch)
      // Это предотвращает двойное срабатывание на мобильных
      console.log("Взаимодействие начато через Touch, игнорируем событие."); // Для отладки
      return;
    }

    // Проверяем, нужно ли ещё убегать или показать сообщение
    if (clickAttempts < 2) {
      // Изменено: теперь кнопка убегает 2 раза, на 3-й клик показывается сообщение
      // Если ещё не 3 раза убегал, перемещаем при клике
      e.preventDefault(); // Предотвращаем стандартное поведение кнопки при клике
      if (containerRef.current) {
        moveButtonToRandomSide(containerRef.current.getBoundingClientRect());
        setClickAttempts((prev) => prev + 1);
      }
    } else if (clickAttempts === 2) {
      // На 3-й клик (после 2-х уклонений) показываем сообщение и меняем состояние
      setShowMessage(true);
      setIsButtonMovable(false); // Блокируем дальнейшие перемещения
      // Сбрасываем флаг, так как больше кнопка не двигается
      touchStartedRef.current = false;
    }
    // Не сбрасываем флаг в конце handleClick, так как он устанавливается/сбрасывается в touch-обработчиках
  };
  // ----------------------------------------

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    // Проверяем флаг перед началом
    if (touchStartedRef.current) {
      console.log("TouchStart: Взаимодействие уже начато, игнорируем.");
      e.preventDefault(); // Пытаемся предотвратить любое стандартное поведение
      e.stopPropagation(); // Пытаемся остановить всплытие
      return;
    }

    // Устанавливаем флаг, что началось Touch-взаимодействие
    touchStartedRef.current = true;

    // Предотвращаем стандартное поведение для избежания дублирования события
    e.preventDefault();
    e.stopPropagation(); // Также останавливаем всплытие, чтобы не сработали другие обработчики
    // Вызываем ту же логику, что и при клике
    handleClick(e);
  };

  // Обработчик touchend/reset для сброса флага после окончания касания
  const handleTouchEndResetFlag = () => {
    // Сбрасываем флаг только если кнопка всё ещё movable (не показано сообщение)
    if (isButtonMovable) {
      touchStartedRef.current = false;
    }
    // Если сообщение уже показано, флаг не нужен, и он уже сброшен в handleClick
  };

  // Обработчик touchcancel/reset для сброса флага при отмене касания
  const handleTouchCancelResetFlag = () => {
    // Сбрасываем флаг только если кнопка всё ещё movable (не показано сообщение)
    if (isButtonMovable) {
      touchStartedRef.current = false;
    }
  };

  // Обработчик mouseEnter для дополнительного "ухода" при наведении до 2-го клика
  const handleMouseEnter = () => {
    if (clickAttempts < 2 && isButtonMovable && containerRef.current) {
      // Изменено на 2
      moveButtonToRandomSide(containerRef.current.getBoundingClientRect());
    }
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "30px 20px 20px 20px", // увеличен отступ сверху для надписи
        margin: "20px auto",
        maxWidth: "800px", // ширина основного контейнера
        minHeight: "200px", // высота области для движения кнопки
        // border: "1px solid red",
      }}
    >
      {/* Надпись сверху */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        А напоследок надобно вон ту кнопку внизу аж три раза{" "}
        <b style={{ fontSize: "24px" }}>тыкнуть, чтоб подтвердить</b>, что, мол,
        не шут, не леший, а гость желанный!
      </div>

      <div
        ref={containerRef}
        className="rsvp-container"
        style={{
          position: "relative",
          height: "100%", // Занимает оставшееся место внутри внешнего контейнера
        }}
      >
        <button
          ref={buttonRef}
          onClick={handleClick} // <-- ONCLICK ВЕРНУЛСЯ
          onTouchStart={handleTouchStart} // Добавляем обработчик касания
          onTouchEnd={handleTouchEndResetFlag} // Сбрасываем флаг при окончании касания
          onTouchCancel={handleTouchCancelResetFlag} // Сбрасываем флаг при отмене касания
          onMouseEnter={handleMouseEnter} // Добавляем обработчик наведения
          style={{
            position: "absolute",
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            width: "250px",
            height: "50px",
            fontSize: "18px",
            backgroundColor: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(255, 77, 77, 0.4)",
            transition: "left 0.8s, top 0.8s, box-shadow 0.2s", // Плавное движение и переход тени
            zIndex: 1000,
          }}
          onMouseDown={(e) => {
            // Уменьшаем тень при нажатии
            (e.target as HTMLElement).style.boxShadow =
              "0 2px 4px rgba(255, 77, 77, 0.3)";
            // Уменьшаем яркость при нажатии (эффект нажатия)
            (e.target as HTMLElement).style.backgroundColor = "#e60000";
          }}
          onMouseUp={(e) => {
            // Возвращаем тень при отпускании
            (e.target as HTMLElement).style.boxShadow =
              "0 4px 8px rgba(255, 77, 77, 0.4)";
            // Возвращаем цвет фона при отпускании
            (e.target as HTMLElement).style.backgroundColor = "#ff4d4d";
          }}
          onMouseOver={(e) => {
            // Увеличиваем тень при наведении
            (e.target as HTMLElement).style.boxShadow =
              "0 6px 12px rgba(255, 77, 77, 0.5)";
            // Немного осветляем цвет при наведении
            (e.target as HTMLElement).style.backgroundColor = "#ff6666";
          }}
          onMouseOut={(e) => {
            // Возвращаем исходную тень при уходе мыши
            (e.target as HTMLElement).style.boxShadow =
              "0 4px 8px rgba(255, 77, 77, 0.4)";
            // Возвращаем исходный цвет фона при уходе мыши
            (e.target as HTMLElement).style.backgroundColor = "#ff4d4d";
          }}
        >
          {clickAttempts < 2
            ? `Подтвердить! (${2 - clickAttempts + 1})`
            : "Подтвердить!"}{" "}
        </button>
        {showMessage && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              zIndex: 1001,
              textAlign: "center",
              width: "95%",
            }}
          >
            Ох, ты ж! Глянь-ка, настойчивость какая! Тогда, коли пообещал, так
            уж будь добр — приходи! Ждём с радостью!
          </div>
        )}
      </div>
    </div>
  );
};

export default RsvpConfirmation;
