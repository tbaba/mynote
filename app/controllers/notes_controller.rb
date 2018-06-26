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
end
