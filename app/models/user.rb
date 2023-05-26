class User < ApplicationRecord
  has_secure_password
  validates_presence_of :username
  validates :password, length: { in: 6..20 }

  before_validation :set_defaults

  private

  def set_defaults
    self.avatar = "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg" if self.avatar.blank?
  end
end
