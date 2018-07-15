# frozen_string_literal: true

class NotesController < ApplicationController
  def index
    respond_to do |format|
      format.json do
        @notes = Note.order(created_at: :desc)
        render json: @notes.as_json
      end
    end
  end

  def create
    respond_to do |format|
      format.json do
        @note = Note.new(note_params)

        if @note.save!
          render json: @note.as_json, status: :created
        else
          render json: @note.errors, status: :unprocessable_entity
        end
      end
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body)
  end
end
