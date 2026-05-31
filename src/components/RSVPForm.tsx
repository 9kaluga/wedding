import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setGuestInfo,
  submitRSVPStart,
  submitRSVPSuccess,
  submitRSVPFailure,
} from "../features/rsvp/rsvpSlice";

const RSVPForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { guestInfo, loading, submitted, error } = useAppSelector(
    (state) => state.rsvp,
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    let processedValue: any = value;

    if (name === "attending") {
      processedValue = value === "true";
    } else if (name === "guestsCount") {
      processedValue = parseInt(value);
    }

    dispatch(setGuestInfo({ [name]: processedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitRSVPStart());
    //если прикрутить АПИ и БД для сообщений, то можно будет попробовать
    setTimeout(() => {
      try {
        console.log("RSVP submitted:", guestInfo);
        dispatch(submitRSVPSuccess());
      } catch (err) {
        dispatch(submitRSVPFailure("Failed to submit RSVP"));
      }
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="rsvp-success">
        <h2>Спасибо за подтверждение!</h2>
        <p>
          Мы рады, что вы сможете присоединиться к нам в этот особенный день!
        </p>
      </div>
    );
  }

  return (
    <div className="rsvp-form">
      <h2>Подтвердите ваше участие</h2>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ваше имя *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={guestInfo.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={guestInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={guestInfo.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Вы придете? *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="attending"
                value="true"
                checked={guestInfo.attending === true}
                onChange={handleChange}
              />
              Да, я буду
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value="false"
                checked={guestInfo.attending === false}
                onChange={handleChange}
              />
              Нет, не смогу
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value=""
                checked={guestInfo.attending === null}
                onChange={handleChange}
              />
              Пока не знаю
            </label>
          </div>
        </div>

        {guestInfo.attending === true && (
          <div className="form-group">
            <label htmlFor="guestsCount">Количество гостей</label>
            <select
              id="guestsCount"
              name="guestsCount"
              value={guestInfo.guestsCount}
              onChange={handleChange}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="message">Сообщение для молодоженов</label>
          <textarea
            id="message"
            name="message"
            value={guestInfo.message}
            onChange={handleChange}
            rows={4}
          ></textarea>
        </div>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Отправляем..." : "Отправить"}
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
